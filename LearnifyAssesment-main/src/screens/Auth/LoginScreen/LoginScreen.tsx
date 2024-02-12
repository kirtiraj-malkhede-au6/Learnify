import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {createRef, useState} from 'react';
import {LoginScreenProps} from './types';
import {Block, TextInput, Typography} from '../../../components';
import {Header} from '../../../components/Header';
import {RoundButton} from '../../../components/RoundButton';
import {SIGNING_TERMS} from '../../../constant/constant';

export const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation,
  route,
}) => {
  const phoneRef = createRef();
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  const getOtpHandler = () => {
    Keyboard.dismiss();
    navigation.navigate('OTP Verify', {
      phoneNumber: '+91' + phoneNumber,
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, backgroundColor: '#fff'}}>
        <Header title={route.name} />
        <Block flex={1} justify="space-between">
          <Block center mt={20} height={'40%'}>
            <Image
              source={require('../../../../assets/images/welcom.jpg')}
              style={{height: '100%', width: '70%'}}
            />
          </Block>
          <Block flex={1} p={20} align="center">
            <Block
              mv={20}
              bw={1}
              br={44}
              height={44}
              ph={20}
              color="#f6f6f6"
              borderColor="#9B9797"
              direction="row"
              align="center">
              <Block>
                <Typography>+91</Typography>
              </Block>
              <TextInput
                innerRef={phoneRef}
                ml={10}
                placeholder="Phone Number"
                keyboardType="numeric"
                height={'100%'}
                style={{flex: 1}}
                onBlur={() => Keyboard.dismiss()}
                onChangeText={e => setPhoneNumber(e)}
              />
            </Block>
            <RoundButton title="Get OTP" onPress={getOtpHandler} />
            <Typography color="#9b9797" mv={20}>
              {SIGNING_TERMS}
            </Typography>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
