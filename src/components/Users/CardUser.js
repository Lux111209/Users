import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const CardUser = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{user.nombre}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => onEdit(user)} style={styles.iconBtn}>
            <Feather name="edit" size={18} color="#6C63FF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(user.id)} style={styles.iconBtn}>
            <Feather name="trash-2" size={18} color="#A11B1B" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardText}>Edad: {user.edad}</Text>
      <Text style={styles.cardText}>Correo: {user.correo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconBtn: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#203979ff",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#3B2C24",
  },
});

export default CardUser;
