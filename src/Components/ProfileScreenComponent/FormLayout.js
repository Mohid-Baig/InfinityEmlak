import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

const FormLayout = () => {
  const [form, setForm] = useState({
    name: 'M. Anwer',
    job: 'H\\W',
    relation: 'Wife',
    nationality: 'Pakistan',
    dob: '24-03-2024',
    address: 'House no # 41 Wapda Town, Lahore',
  });

  return (
    <View style={styles.container}>
      {/* Name and Job Fields */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Job</Text>
          <TextInput
            style={styles.input}
            value={form.job}
            onChangeText={(text) => setForm({ ...form, job: text })}
          />
        </View>
      </View>

      {/* Relation and Nationality Fields */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Relation</Text>
          <TextInput
            style={styles.input}
            value={form.relation}
            onChangeText={(text) => setForm({ ...form, relation: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nationality</Text>
          <TextInput
            style={styles.input}
            value={form.nationality}
            onChangeText={(text) => setForm({ ...form, nationality: text })}
          />
        </View>
      </View>

      {/* Date of Birth Field */}
      <View style={styles.singleRow}>
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput
          style={styles.fullInput}
          value={form.dob}
          onChangeText={(text) => setForm({ ...form, dob: text })}
        />
      </View>

      {/* Address Field */}
      <View style={styles.singleRow}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.fullInput}
          value={form.address}
          onChangeText={(text) => setForm({ ...form, address: text })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  singleRow: {
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 5,
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    color:'#b3b3b3',
    fontSize:15
  },
  fullInput: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    color:'#b3b3b3'
  },
});

export default FormLayout;
