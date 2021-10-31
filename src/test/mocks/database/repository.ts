
export class MockRepository {
  async createRepository(repository: string, schema: any) {
    new Promise((resolve) => {
      resolve(true)
    })
  }
  async createOne(data: unknown): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  async updateOne(id: string, data: unknown): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  async deleteOneById(id: string): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  async findOneById(id: string): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  async findOne(data: unknown): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  async find(selector: unknown): Promise<unknown> {
    return new Promise((resolve) => {
      resolve({})
    })
  }
}