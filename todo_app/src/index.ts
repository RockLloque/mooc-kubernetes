import Fastify from 'fastify';

const PORT = Number(process.env.PORT) || 3000;

const app = Fastify({ logger: true });

app.get('/', async () => ({ message: 'Hello from the_project' }));

app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Server started in port ${PORT}`);
});
