 'use client'
 import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm';
 
const stripePromise = loadStripe('pk_test_51OU7K2GzmgnXQM1ZzsvV9RUUBFbRKzol5julcMWC8zV8ckijoKAHbr1kBB2cwqbJuKN4kkxdomxe1fhpbNjkLDNm00DHUrBE3P');

const NewPaymentCardSetup = () => {
  return (
    <div>
      
      <Elements stripe={stripePromise}>
        <PaymentForm/>
      </Elements>
    </div>
  );
};

export default NewPaymentCardSetup;
