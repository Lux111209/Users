import React, { useCallback } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import useFetchUser from "../hooks/useFetchUser";
import CardUser from "../components/Users/CardUser";

const ShowUser = () => {
  const {
    usuarios,
    loading,
    handleEliminar,
    setNombre,
    setEdad,
    setCorreo,
    fetchUsuarios,
  } = useFetchUser();

  const navigation = useNavigation();

  // Recarga la lista cada vez que esta pantalla recibe foco
  useFocusEffect(
    useCallback(() => {
      fetchUsuarios();
    }, [])
  );

  // Maneja el clic en editar: envía el usuario completo a AddUser
  const handleEditar = (usuario) => {
    setNombre(usuario.nombre);
    setEdad(String(usuario.edad));
    setCorreo(usuario.correo);
    navigation.navigate("AddUser", { user: usuario }); 
  };

  // Confirmación de eliminación
  const confirmarEliminar = (id) => {
    Alert.alert("Confirmar", "¿Deseas eliminar este usuario?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", onPress: () => handleEliminar(id) },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUser
            user={item}
            onEdit={handleEditar}
            onDelete={confirmarEliminar}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F9FF",
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShowUser;
