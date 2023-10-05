import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from "react-native";
import { Appbar } from "../components/Appbar";
import Constants from 'expo-constants';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from 'react-native';

const validationSchema = yup.object().shape({
  campoA: yup.number().required('Vazio'),
  campoB: yup.number().required('Vazio'),
  campoC: yup.number().required('Vazio'),
  campoX: yup.string().required('Vazio'),
});

interface FormTypes {
  campoA: number;
  campoB: number;
  campoC: number;
  campoX: string;
}

const valoresIniciais: FormTypes = {
  campoA: 0,
  campoB: 0,
  campoC: 0,
  campoX: ''
};

export function TelaRegraDeTres() {
  function onSubmitForm(values: FormTypes) {
    Alert.alert(values.campoA.toString());
    
  }

  return (
    <View style={styles.container}>
      <Appbar
        titulo="Regra de 3"
        backgroundColor="cadetblue"
        fontColor="white"
      />
      <ScrollView>
        <Formik
          initialValues={valoresIniciais}
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, resetForm, values, errors }) => (
            <View style={{ margin: 16 }}>
              <View style={{ marginBottom: 16 }}>
                <Text>Campo 1</Text>
                <TextInput
                  onChangeText={handleChange('campoA')}
                  onBlur={handleBlur('campoA')}
                  value={(values.campoA === 0) ? "" : values.campoA.toString()}
                  style={[styles.input]}
                  placeholder="Campo 1"
                  keyboardType="numeric"
                />
                {errors.campoA && <Text style={{ color: "red" }}>{errors.campoA}</Text>}
              </View>
              <Button title="Gerar" color="blue" onPress={() => handleSubmit()} />
              <Button title="Limpar" color="red" onPress={() => resetForm()} />
            </View>
          )}
        </Formik>
      </ScrollView>
      <StatusBar style="light" backgroundColor="cadetblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
});
