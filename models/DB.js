class DB {
  constructor(connection){
    this.db = connection.db('db_name');
  }
  save(data){
    this.db.save(data);
  }
  get(id){
    return this.db.get(id);
  }

}
