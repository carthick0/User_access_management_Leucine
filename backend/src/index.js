const express= require('express');
const { PORT } = require('./config/server-config');
const softwareRoutes = require('./routes/software.routes');
const authRoutes = require('./routes/auth.router');
const requestRoutes = require('./routes/request.routes');
const pingRoute = require('./routes/ping.routes');
const { AppDataSource } = require('./config/data-source');
const app=express();


app.use(express.json());

app.use('/api/ping', pingRoute);
app.use('/api/auth', authRoutes);        
app.use('/api/software', softwareRoutes); 
app.use('/api/requests', requestRoutes); 
 
app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT:${PORT}`)
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    console.log("Entities loaded:", AppDataSource.entityMetadatas.map(e => e.name));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });