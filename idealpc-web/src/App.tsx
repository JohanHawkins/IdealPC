import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './App.css'; // ← IMPORTANTE: Agregar esta línea

interface ComponentCard {
  id: string;
  name: string;
  selected: boolean;
}

function App() {
  const [budget, setBudget] = useState('');
  const [taskTypes, setTaskTypes] = useState('');
  const [range, setRange] = useState('');
  const [storage, setStorage] = useState('');

  const [components, setComponents] = useState<ComponentCard[]>([
    { id: 'motherboard', name: 'Placa Base', selected: false },
    { id: 'processor', name: 'Procesador', selected: false },
    { id: 'ram', name: 'Memoria RAM', selected: false },
    { id: 'gpu', name: 'Tarjeta Gráfica', selected: false },
    { id: 'hdd', name: 'Disco Duro', selected: false },
    { id: 'case', name: 'Gabinete', selected: false },
    { id: 'psu', name: 'Fuente de poder', selected: false },
  ]);

  const toggleComponent = (id: string) => {
    setComponents(components.map(comp => 
      comp.id === id ? { ...comp, selected: !comp.selected } : comp
    ));
  };

  const handleConsultar = () => {
    console.log('Presupuesto:', budget);
    console.log('Tipos de tareas:', taskTypes);
    console.log('Gamma:', range);
    console.log('Almacenamiento:', storage);
    console.log('Componentes seleccionados:', components.filter(c => c.selected));
  };

  return (
    <div className="app-container">
      <Container fluid className="py-4">
        <Row>
          {/* Sidebar - Formulario */}
          <Col lg={3} md={12} className="mb-4">
            <div className="sidebar">
              <div className="logo-container mb-4">
                <h2 className="logo">IdealPC 💻</h2>
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Presupuesto:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tipos de tareas:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={taskTypes}
                    onChange={(e) => setTaskTypes(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Gamma:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Almacenamiento:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    className="custom-input"
                  />
                </Form.Group>

                <Button 
                  className="btn-consultar w-100"
                  onClick={handleConsultar}
                >
                  Consultar
                </Button>
              </Form>
            </div>
          </Col>

          {/* Main Content - Grid de Componentes */}
          <Col lg={9} md={12}>
            <Row className="g-3">
              {components.map((component) => (
                <Col key={component.id} lg={4} md={6} sm={12}>
                  <Card 
                    className={`component-card ${component.selected ? 'selected' : ''}`}
                    onClick={() => toggleComponent(component.id)}
                  >
                    <Card.Body className="text-center">
                      <Card.Title className="component-name">
                        {component.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;