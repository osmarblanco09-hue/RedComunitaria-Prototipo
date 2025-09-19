
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function ReportPrototype() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg shadow-xl rounded-2xl">
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Red Comunitaria de Reporte
          </h1>

          {view === "home" && (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-700 text-center">
                Bienvenido a la plataforma de participación ciudadana para la
                protección del patrimonio cultural y natural de Teotihuacan.
              </p>
              <Button
                className="w-full rounded-xl bg-green-700 hover:bg-green-800"
                onClick={() => setView("form")}
              >
                Enviar reporte
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-xl"
                onClick={() => setView("alerts")}
              >
                Ver noticias y alertas
              </Button>
            </div>
          )}

          {view === "form" && (
            <ReportForm goHome={() => setView("home")} />
          )}

          {view === "alerts" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-700 text-center">
                Noticias y alertas
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Taller comunitario este sábado sobre conservación del
                  patrimonio.
                </li>
                <li>
                  Reporte reciente de basura atendido en la zona norte de la
                  pirámide.
                </li>
                <li>
                  Nueva campaña digital sobre cuidado de los ecosistemas
                  locales.
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full rounded-xl"
                onClick={() => setView("home")}
              >
                Regresar al inicio
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ReportForm({ goHome }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Input placeholder="Nombre (opcional)" className="rounded-xl" />
          <Input placeholder="Ubicación del incidente" className="rounded-xl" />

          <Select>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Tipo de reporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="construccion">Construcción ilegal</SelectItem>
              <SelectItem value="basura">Basura acumulada</SelectItem>
              <SelectItem value="danos">Daños al patrimonio</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Descripción breve del problema"
            className="rounded-xl"
          />

          <Button className="w-full rounded-xl bg-green-700 hover:bg-green-800">
            Enviar reporte
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-xl"
            onClick={goHome}
          >
            Cancelar
          </Button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-green-700">
            ¡Reporte enviado con éxito!
          </h2>
          <p className="text-gray-600">
            Gracias por contribuir a la protección del patrimonio de Teotihuacan.
          </p>
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={goHome}
          >
            Regresar al inicio
          </Button>
        </div>
      )}
    </div>
  );
}
