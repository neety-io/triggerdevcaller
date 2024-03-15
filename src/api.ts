import express from 'express';
import cors from 'cors';
import axios from 'axios';
import morgan from 'morgan';

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(morgan('tiny'))
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});


async function executeTriggerDev(uuid:string) {
  try {
      const response = await axios.post('https://cloud.trigger.dev/api/v1/http-endpoints/clrqqcvehddkfop2yg41i8dau/env/prod/principal-small', { automation_uuid: uuid },
      { headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer d6b6f334e919340e192e0c70f4f73e60d0be38fcc6570345aebff71a30b6abb5'
      
    }
  }
      );
      console.log(response.data); // Handle the response as needed
  } catch (error) {
      console.error('Error executing the automation:', error);
  }
}

app.post('/triggerdevcaller', (req, res) => {
  const {automation_uuid}=req.body;
  executeTriggerDev(automation_uuid)
  res.send("Automation send succesfully")
});

// Version the api

export default app;

