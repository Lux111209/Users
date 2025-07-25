import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useFetchUser = () => {
  // Lista de usuarios y loading
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://retoolapi.dev/zZhXYF/movil");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      Alert.alert("Error", "No se pudieron cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  const handleGuardar = async (userData) => {
    const { nombre, edad, correo } = userData;
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    try {
      const response = await fetch("https://retoolapi.dev/zZhXYF/movil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          correo,
        }),
      });
      if (response.ok) {
        Alert.alert("Éxito", "Usuario guardado correctamente");
        fetchUsuarios();
      } else {
        Alert.alert("Error", "No se pudo guardar el usuario");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al enviar los datos");
    }
  };

  const handleActualizar = async (id, userData) => {
    const { nombre, edad, correo } = userData;
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Completa todos los campos para actualizar");
      return;
    }
    try {
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          correo,
        }),
      });
      if (response.ok) {
        Alert.alert("Éxito", "Usuario actualizado correctamente");
        fetchUsuarios();
      } else {
        Alert.alert("Error", "No se pudo actualizar el usuario");
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      Alert.alert("Error", "Ocurrió un error al actualizar");
    }
  };

  const handleEliminar = async (id) => {
    try {
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        Alert.alert("Éxito", "Usuario eliminado correctamente");
        fetchUsuarios();
      } else {
        Alert.alert("Error", "No se pudo eliminar el usuario");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      Alert.alert("Error", "Ocurrió un error al eliminar");
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return {
    usuarios,
    loading,
    fetchUsuarios,
    handleGuardar,
    handleActualizar,
    handleEliminar,
  };
};

export default useFetchUser;
