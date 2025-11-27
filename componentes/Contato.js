import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Contato = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fale Conosco</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>📧</Text>
          <Text style={styles.infoTexto}>contato@loja.com</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>📞</Text>
          <Text style={styles.infoTexto}>(11) 9999-9999</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>🏢</Text>
          <Text style={styles.infoTexto}>São Paulo - SP</Text>
        </View>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          style={styles.botaoProdutos}
          onPress={() => navigation.navigate('Início')}
        >
          <Text style={styles.botaoProdutostxt}>Voltar ao Início</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoProdutos}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Text style={styles.botaoProdutostxt}>Ver Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',
  },
  infoContainer: {
    marginBottom: 40,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  infoTexto: {
    fontSize: 16,
    color: '#2c3e50',
  },
  botoesContainer: {
    alignItems: 'center',
  },
  botaoProdutos: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    width: '30%',
    alignItems: 'center',
  },
  botaoProdutostxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contato;