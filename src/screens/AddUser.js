import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import useFetchUser from "../hooks/useFetchUser";

const AddUser = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params || {};

  // Estados locales para formulario
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [modoEditar, setModoEditar] = useState(false);

  const { handleGuardar, handleActualizar } = useFetchUser();

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setEdad(user.edad.toString());
      setCorreo(user.correo);
      setModoEditar(true);
    } else {
      setNombre("");
      setEdad("");
      setCorreo("");
      setModoEditar(false);
    }
  }, [user]);

  const handleSubmit = () => {
    const userData = { nombre, edad, correo };
    if (modoEditar) {
      handleActualizar(user.id, userData);
    } else {
      handleGuardar(userData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {modoEditar ? "Editar Usuario" : "Agregar Usuario"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <Button
        title={modoEditar ? "Guardar Cambios" : "Guardar Usuario"}
        onPress={handleSubmit}
        color="#181860ff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ebf8f9ff", padding: 20 },
  title: {
    fontSize: 24,
    color: "#181860ff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
  },
});

export default AddUser;
