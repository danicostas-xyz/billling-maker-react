/* eslint-disable react/prop-types */
import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  text: { fontSize: 14 }
})

const FacturaPDF = ({ cliente, fecha, items }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Cliente: {cliente}</Text>
        <Text style={styles.text}>Fecha: {fecha}</Text>
      </View>
      <View style={styles.section}>
        {items.map((item, index) => (
          <Text key={index} style={styles.text}>
            {item.nombre} - {item.cantidad} x {item.precio}€
          </Text>
        ))}
      </View>
    </Page>
  </Document>
)

export default function DescargarPDF ({ datos }) {
  return (
    <PDFDownloadLink document={<FacturaPDF {...datos} />} fileName='factura.pdf'>
      {({ loading }) => (loading ? 'Generando...' : 'Descargar PDF')}
    </PDFDownloadLink>
  )
}
