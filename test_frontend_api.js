// Script para probar la conexión del frontend con la API
const API_URL = 'http://localhost:8080/api';

async function testAPI() {
  console.log('🧪 Probando conexión API desde frontend...\n');

  // 1. Probar endpoint de test
  console.log('1. Probando endpoint de test...');
  try {
    const testResponse = await fetch(`${API_URL}/test`);
    const testData = await testResponse.json();
    console.log('✅ Test endpoint:', testData);
  } catch (error) {
    console.log('❌ Error en test endpoint:', error.message);
  }

  // 2. Probar endpoint de honorarios
  console.log('\n2. Probando endpoint de honorarios...');
  try {
    const honorariosResponse = await fetch(`${API_URL}/honorarios`);
    const honorariosData = await honorariosResponse.json();
    console.log('✅ Honorarios endpoint:', honorariosData);
    
    if (honorariosData.categorias) {
      console.log(`📊 Categorías encontradas: ${honorariosData.categorias.length}`);
      honorariosData.categorias.forEach((cat, index) => {
        console.log(`  ${index + 1}. ${cat.nombre} (${cat.servicios?.length || 0} servicios)`);
      });
    } else {
      console.log('⚠️  No se encontraron categorías en la respuesta');
    }
  } catch (error) {
    console.log('❌ Error en honorarios endpoint:', error.message);
  }

  // 3. Probar endpoint de configuración
  console.log('\n3. Probando endpoint de configuración...');
  try {
    const configResponse = await fetch(`${API_URL}/honorarios/configuracion`);
    const configData = await configResponse.json();
    console.log('✅ Configuración endpoint:', configData);
  } catch (error) {
    console.log('❌ Error en configuración endpoint:', error.message);
  }

  console.log('\n🎯 Pruebas completadas!');
}

// Ejecutar pruebas
testAPI(); 