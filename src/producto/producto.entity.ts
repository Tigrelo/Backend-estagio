import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'producto'})
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id: aluno;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    aluno: string;

    @Column({type: 'float', nullable: false})
    curso: number;
}