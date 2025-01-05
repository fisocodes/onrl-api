
export interface ServiceBase<T> {
  createOne: (data: Omit<T, 'id' | 'uuid' | 'createDate' | 'updateDate' | 'deleteDate' | 'creatorId' | 'updaterId' | 'deleterId'>) => Promise<T>
  getOne: (id: string) => Promise<T>
  updateOne: (id: string) => Promise<T>
  deleteOne: (id: string) => Promise<T>
}
