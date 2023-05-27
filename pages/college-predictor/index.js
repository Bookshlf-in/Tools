import { useState } from 'react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import styles from '@/styles/college-predictor.module.css';
import Dropdown from '@/components/Dropdown';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import year from '@/public/collegePredictor/year.json';
import academicProgram from '@/public/collegePredictor/academicProgram.json';
import gender from '@/public/collegePredictor/gender.json';
import quota from '@/public/collegePredictor/quota.json';
import seatType from '@/public/collegePredictor/seatType.json';
import instituteMap from '@/public/collegePredictor/instituteMap.json';
import academicProgramMap from '@/public/collegePredictor/academicProgramMap.json';
import genderMap from '@/public/collegePredictor/genderMap.json';
import seatTypeMap from '@/public/collegePredictor/seatTypeMap.json';
import quotaMap from '@/public/collegePredictor/quotaMap.json';
import data2016 from '@/public/collegePredictor/data2016.json';
import data2017 from '@/public/collegePredictor/data2017.json';
import data2018 from '@/public/collegePredictor/data2018.json';
import data2019 from '@/public/collegePredictor/data2019.json';
import data2020 from '@/public/collegePredictor/data2020.json';
import data2021 from '@/public/collegePredictor/data2021.json';
import data2022 from '@/public/collegePredictor/data2022.json';

const dataMap = {
  2016: data2016,
  2017: data2017,
  2018: data2018,
  2019: data2019,
  2020: data2020,
  2021: data2021,
  2022: data2022,
};

const CollegePredictor = () => {
  const [formData, setFormData] = useState({
    quota: 1,
    seatType: 1,
    year: 2022,
  });
  const [result, setResult] = useState();
  const [error, setError] = useState('');
  const onChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setResult();
    setFormData((formData) => {
      if (value == 0) {
        delete formData[name];
        return formData;
      }
      return { ...formData, [name]: +value };
    });
  };

  const handleSubmit = () => {
    if (!formData.rank || formData.rank <= 0) {
      setError('Please enter a valid rank.');
      return;
    }
    const res = dataMap[formData.year].filter((e) => {
      return (
        e.closingRank >= formData.rank &&
        e.quota == formData.quota &&
        e.seatType == formData.seatType &&
        (formData.gender ? e.gender == formData.gender : true) &&
        (formData.academicProgram
          ? e.academicProgram == formData.academicProgram
          : true)
      );
    });
    setResult(res);
    postData();
  };

  const postData = () => {
    const ip = sessionStorage.getItem('ip');
    const sessionId = sessionStorage.getItem('sessionId');
    const version = publicRuntimeConfig?.version;
    const input = {
      year: formData.year ?? '',
      percentile: formData.percentile ?? '',
      rank: formData.rank ?? '',
      academicProgram: formData.academicProgram
        ? academicProgramMap[formData.academicProgram]
        : '',
      quota: formData.quota ? quotaMap[formData.quota] : '',
      seatType: formData.seatType ? seatTypeMap[formData.seatType] : '',
      gender: formData.gender ? genderMap[formData.gender] : '',
    };
    console.log('POST data', { ...input, ip, sessionId, version });
  };

  const renderResultView = () => {
    if (error) return <p className={styles.error}>{error}</p>;
    if (!result)
      return (
        <p className={styles.infoText}>
          Please enter your rank and press submit to view results.
        </p>
      );
    if (result.length == 0) return <p>No Result Found</p>;
    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRow}>
              <th>Institute</th>
              <th>Academic Program</th>
              <th>Quota</th>
              <th>Seat Type</th>
              <th>Gender</th>
              <th>Opening Rank</th>
              <th>Closing Rank</th>
            </tr>
            {result?.map((e, idx) => (
              <tr className={styles.tableRow} key={idx}>
                <td>{instituteMap[e.institute]}</td>
                <td>{academicProgramMap[e.academicProgram]}</td>
                <td>{quotaMap[e.quota]}</td>
                <td>{seatTypeMap[e.seatType]}</td>
                <td>{genderMap[e.gender]}</td>
                <td>{e.openingRank}</td>
                <td>{e.closingRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Predict your college based on your JEE Mains rank.
      </h1>
      <div className={styles.formContainer}>
        <div className={styles.formContainerTop}>
          <Dropdown name="year" values={year} onChange={onChange} />
          <TextInput
            name="percentile"
            placeholder="Enter your percentile"
            type="number"
            onChange={onChange}
            onPressEnter={handleSubmit}
          />
          <TextInput
            name="rank"
            placeholder="Enter your rank*"
            type="number"
            onChange={onChange}
            onPressEnter={handleSubmit}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        <div className={styles.formContainerBottom}>
          <div className={styles.formItem}>
            <div className={styles.formItemName}>Academic Program</div>
            <Dropdown
              name="academicProgram"
              values={academicProgram}
              onChange={onChange}
            />
          </div>
          <div className={styles.formItem}>
            <div className={styles.formItemName}>Quota *</div>
            <Dropdown name="quota" values={quota} onChange={onChange} />
          </div>
          <div className={styles.formItem}>
            <div className={styles.formItemName}>Seat Type *</div>
            <Dropdown name="seatType" values={seatType} onChange={onChange} />
          </div>
          <div className={styles.formItem}>
            <div className={styles.formItemName}>Gender</div>
            <Dropdown name="gender" values={gender} onChange={onChange} />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      {renderResultView()}
    </div>
  );
};

export default CollegePredictor;
