import React from 'react';
import styles from './SignIn.module.css';
import { InputField } from '../../components/InputField/InputField';

const SignIn = ()=> {
  return (
    <main className={styles.container}>
      <form className={styles.formCard}>
        <h1 className={styles.title}>Sign in</h1>
        
        <InputField 
          label="Email"
          placeholder="Enter email"
        />
        
        <InputField 
          label="Password"
          placeholder="Enter password"
        />

        <button className={styles.signInButton} type="submit">
          Sign in
        </button>

        <p className={styles.signUpText}>
          or <button type="button" className={styles.signUpLink}>Sign up</button>
        </p>
      </form>
    </main>
  );
}
export default SignIn;