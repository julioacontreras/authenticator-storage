/*
    const jsonData = JSON.parse(data);
    if (this.action === 'createOne') {
      await createUser.create(jsonData, repository, auth);
      return {status: 'ok'};
    } else if (this.action === 'deleteOne') {
      await repository.deleteOne(jsonData.id);
      return {status: 'ok'};
    } else if (this.action === 'find') {
      const payload = await repository.find(jsonData);
      return payload;
    } else if (action === 'findOne') {
      const payload = await repository.findOne(jsonData);
      return payload;
    } else if (action === 'updateOne') {
      await repository.updateOne(jsonData.id, jsonData.data);
      return {status: 'ok'};
    }
    */
