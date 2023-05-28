import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/rank-predictor.module.css';
import TextInput from '@/components/TextInput';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import category from '@/public/rankPredictor/category.json';
import categoryMap from '@/public/rankPredictor/categoryMap.json';
import crlData from '@/public/rankPredictor/crl.json';
import ewsData from '@/public/rankPredictor/ews.json';
import obcData from '@/public/rankPredictor/obc.json';
import scData from '@/public/rankPredictor/sc.json';
import stData from '@/public/rankPredictor/st.json';

const dataMap = {
  CRL: crlData,
  EWS: ewsData,
  OBC: obcData,
  SC: scData,
  ST: stData,
};

const RankPredictor = () => {
  const [formData, setFormData] = useState({ category: 1 });
  const [error, setError] = useState('');
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setResult1([]);
    setResult2([]);
    setFormData((formData) => {
      return { ...formData, [name]: +value };
    });
  };

  const handleSubmit = () => {
    if (
      !formData.percentile ||
      formData.percentile < 0 ||
      formData.percentile > 100
    ) {
      setError('Please enter a valid percentile.');
      setResult1([]);
      setResult2([]);
      return;
    }
    setResult1(getRank(dataMap.CRL, formData.percentile));
    if (categoryMap[formData.category] !== 'GEN') {
      setResult2(
        getRank(dataMap[categoryMap[formData.category]], formData.percentile)
      );
    }
  };

  const getRank = (data, percentile) => {
    const idx = getClosestIndex(data.percentile, percentile);
    const L = data?.rank[idx - 1];
    const R = data?.rank[idx + 1];
    const Mean = (L + R + data.rank[idx]) / 3;
    const normalize = (data.rank[idx] + Mean) / 2;
    const error = Math.abs(normalize - data.rank[idx]);
    return [parseInt(normalize - error), parseInt(normalize + error)];
  };

  const getClosestIndex = (array, value) => {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] >= value && array[i + 1] < value) {
        return i;
      }
    }
    return array.length - 1;
  };

  return (
    <>
      <Head>
        <title>JEE Rank Predictor | Bookshlf Tools</title>
        <meta
          name="description"
          content="Predict your JEE Mains rank based on Percentile obtained | Bookshlf Tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Predict your rank based on your JEE Mains percentile.
        </h1>
        <div className={styles.formContainer}>
          <TextInput
            name="percentile"
            placeholder="Percentile"
            type="number"
            onChange={onChange}
          />
          <Dropdown name="category" values={category} onChange={onChange} />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        <div className={styles.divider} />
        {!error && result1.length == 0 ? (
          <p className={styles.infoText}>
            Please enter your percentile and press submit to view results.
          </p>
        ) : null}
        {error && <p className={styles.errorText}>{error}</p>}
        {result1.length > 0 ? (
          <p className={styles.resultText}>
            Your CRL is :{' '}
            <span
              className={styles.bold}
            >{`${result1[0]} - ${result1[1]}`}</span>
          </p>
        ) : null}
        {result2.length > 0 ? (
          <p className={styles.resultText}>
            Your category rank is :{' '}
            <span
              className={styles.bold}
            >{`${result2[0]} - ${result2[1]}`}</span>
          </p>
        ) : null}
      </div>
    </>
  );
};

export default RankPredictor;
