export class Examen{
    _id?: string;
    medico: string;
    paciente: string;
    area: string;
    tipo: string;
    fecha: string;
    constructor(medico:string, paciente:string, area:string, tipo:string, fecha:string){
        this.medico = medico;
        this.paciente = paciente;
        this.area = area;
        this.tipo = tipo;
        this.fecha = fecha;
    }
}