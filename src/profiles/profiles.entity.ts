import { Entity } from 'common'
import { Column, Entity as TypeORMEntity } from 'typeorm'

@TypeORMEntity({ name: 'profiles' })
export class ProfileEntity extends Entity {
  @Column({ name: 'first_name', type: 'varchar' })
    firstName: string

  @Column({ name: 'last_name', type: 'varchar' })
    lastName: string
}
