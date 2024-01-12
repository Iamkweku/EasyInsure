import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

function sendOtp(userEmail) { 
  
  axios.post(
      "https://a6f3-197-255-118-231.ngrok-free.app/send-otp",
      { email: userEmail }
    ).catch(e => {
      console.log(e)
    })

}

const VerificationScreen = ({ navigation, route }) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(30);
  const userEmail = route.params?.email; // Retrieve user email passed from the previous screen
  
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    sendOtp(userEmail)
    return () => clearInterval(countdown);
  }, []);

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "https://a6f3-197-255-118-231.ngrok-free.app/verify-otp",
        {
          email: userEmail,
          otp: code,
        }
      );

      if (response.data.success) {
        navigation.navigate("Onboarding");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      alert("Failed to verify OTP. Please try again.");
      console.error("Error verifying OTP:", error);
    }
  };

  

  const handleResendCode = async () => {
    if (timer === 0) {
      try {
        await axios.post(
          "https://a6f3-197-255-118-231.ngrok-free.app/send-otp",
          { email: userEmail }
        );
        setTimer(30);
      } catch (error) {
        alert("Failed to resend OTP. Please try again.");
        console.error("Error resending OTP:", error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Almost there</Text>
      <Text style={styles.subtitle}>
        Please enter the 6-digit code sent to {userEmail} for verification.
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
        placeholder="Enter your code"
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
        <Text style={styles.resendText}>
          Didn’t receive any code?{" "}
          {timer === 0
            ? "Resend"
            : "Resend Again in " + (timer < 10 ? `0${timer}` : timer) + "s"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "gray",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#437E9B",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 10,
  },
  verifyButton: {
    backgroundColor: "#437E9B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  resendText: {
    color: "#07A4DB",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default VerificationScreen;
