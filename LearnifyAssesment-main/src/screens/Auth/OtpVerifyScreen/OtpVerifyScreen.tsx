import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {OtpVerifyScreenProps} from './types';
import {Header} from '../../../components/Header';
import {Block, Typography} from '../../../components';
import {RoundButton} from '../../../components/RoundButton';
import {OTP_SENT, SIGNING_TERMS} from '../../../constant/constant';
import {useKeyboard} from '../../../hooks/useKeyboard';
import OTPTextView from 'react-native-otp-textinput';

export const OtpVerifyScreen: React.FC<OtpVerifyScreenProps> = ({route}) => {
  let phoneNumber = route?.params?.phoneNumber;
  const {keyboardVisible} = useKeyboard();
  const [otpInput, setOtpInput] = useState<string>('');
  const input = useRef<OTPTextView>(null);

  const handleSubmitOtp = () => {
    Keyboard.dismiss();
    Alert.alert('Your details has been submitted');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title={route.name} />
      <Block flex={1} justify="space-between">
        {keyboardVisible ? null : (
          <Block center mt={20} height={'40%'}>
            <Image
              source={require('../../../../assets/images/welcom.jpg')}
              style={{height: '100%', width: '70%', backgroundColor: '#fff'}}
            />
          </Block>
        )}
        <Block flex={1} p={20} align="center">
          <Block center>
            <Typography mv={5}>{OTP_SENT}</Typography>
            <Typography mv={5} weight="600" textSize={18}>
              {phoneNumber}
            </Typography>
          </Block>
          <OTPTextView
            ref={input}
            tintColor={'#000'}
            textInputStyle={styles.otpInputs}
            handleTextChange={setOtpInput}
            inputCount={4}
            keyboardType="numeric"
          />
          <RoundButton title="Verify OTP" onPress={handleSubmitOtp} />
          <Typography color="#9b9797" mv={20}>
            {SIGNING_TERMS}
          </Typography>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  otpInputs: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    borderBottomWidth: 1,
  },
});
