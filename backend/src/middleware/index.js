import express from '@feathersjs/express';

export default function middleware() {
  this.use(express.notFound());
  this.use(express.errorHandler());
}
