import ip from 'ip';
import dbConnect from '../../../db/dbConnect';
import CollegePredictorEntries from '../../../models/collegePredictorEntries';

dbConnect();

const addAnalytics = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const data = { ...req.body, ip: ip.address() };
      const collegePredictorEntry = new CollegePredictorEntries(data);
      const newEntry = await collegePredictorEntry.save();
      return res.json({
        ...newEntry._doc,
        msg: 'New entry added successfully',
      });
    }
    res.send('Hello College Predictor');
  } catch (error) {
    console.log('Error occurred in /collegePredictior addAnalytics ', error);
    res.status(500).json({ error: 'Some error occurred' });
  }
};

export default addAnalytics;
