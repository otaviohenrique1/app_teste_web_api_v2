import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from "react-native";
import { Appbar } from "../components/Appbar";
import Constants from 'expo-constants';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from 'react-native';

const validationSchema = yup.object().shape({
  campoA: yup.string().required('Vazio'),
  campoB: yup
    .number()
    .moreThan(0, "Vazio")
    .required('Vazio'),
  // campoC: yup.number().required('Vazio'),
  // campoX: yup.string().required('Vazio'),
});

interface FormTypes {
  campoA: string;
  campoB: number;
  // campoC: number;
  // campoX: string;
}

const valoresIniciais: FormTypes = {
  campoA: "",
  campoB: 0,
  // campoC: 0,
  // campoX: ''
};

export function TelaRegraDeTres() {
  function onSubmitForm(values: FormTypes) {
    Alert.alert(values.campoA);
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
                <TextInput
                  onChangeText={handleChange('campoA')}
                  onBlur={handleBlur('campoA')}
                  value={values.campoA}
                  // value={(values.campoA === 0) ? "" : values.campoA.toString()}
                  style={[styles.input]}
                  placeholder="Campo 1"
                  keyboardType="numeric"
                />
                {errors.campoA && <Text style={{ color: "red" }}>{errors.campoA}</Text>}
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  onChangeText={handleChange('campoB')}
                  onBlur={handleBlur('campoB')}
                  value={(values.campoB === 0) ? "" : values.campoB.toString()}
                  style={[styles.input]}
                  placeholder="Campo 1"
                  keyboardType="numeric"
                />
                {errors.campoB && <Text style={{ color: "red" }}>{errors.campoB}</Text>}
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
