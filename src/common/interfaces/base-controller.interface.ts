export class ControllerBase<T> {
  createOne: (data: any) => Promise<T>
  getOne: (id: string) => Promise<T>
  updateOne: (id: string, data: any) => Promise<T>
  deleteOne: (id: string) => Promise<T>
}
