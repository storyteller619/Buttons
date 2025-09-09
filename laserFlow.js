// Minimal LaserFlow plain JS port of the provided shader demo
(function () {
  const VERT = `precision highp float; attribute vec3 position; void main(){ gl_Position = vec4(position, 1.0); }`;
  const FRAG = `