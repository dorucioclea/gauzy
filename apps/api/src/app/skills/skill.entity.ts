import { Base } from '../core/entities/base';
import { Entity, Column, Unique } from 'typeorm';
import { Skill as ISkill } from '@gauzy/models';
import { ApiProperty } from '@nestjs/swagger';

@Entity('skill')
@Unique(['name'])
export class Skill extends Base implements ISkill {
	@ApiProperty({ type: String })
	@Column()
	name?: string;

	@ApiProperty({ type: String })
	@Column()
	description?: string;

	@ApiProperty({ type: String })
	@Column()
	color?: string;
}
