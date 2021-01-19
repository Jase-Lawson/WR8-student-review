module.exports = {

  getCaughtPokemon: async (req, res) => {
    const db = req.app.get('db');
    const result = await db.get_caught_pokemon([req.session.user.trainer_id]);
    return res.status(200).send(result)
  },


  catchPokemon: async (req, res) => {
    const { name, api_id, sprite_url } = req.body;
    const db = req.app.get('db');
    const result = await db.catch_pokemon([name, req.session.user.trainer_id, api_id, sprite_url]);
    console.log(result)
    return res.status(201).send(result)
  }
}