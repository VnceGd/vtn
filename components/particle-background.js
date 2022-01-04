import Particles from 'react-tsparticles'

export default function ParticleBackground() {
  return (
    <Particles
      options={
        {
          detectRetina: true,
          fpsLimit: 30,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: true, force: 333, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 10,
                speed: 1,
              },
              bounce: { distance: 200 },
              bubble: {
                distance: 400,
                duration: 2,
                mix: false,
                opacity: 0.8,
                size: 40,
              },
              grab: {
                distance: 400,
                links: { blink: false, consent: false, opacity: 1 },
              },
              push: { default: true, groups: [], quantity: 4 },
              remove: { quantity: 2 },
              repulse: {
                distance: 300,
                duration: 3,
                factor: 3,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
              slow: { factor: 3, radius: 200 },
            },
          },
          particles: {
            bounce: {
              horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
              vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
            },
            collisions: {
              bounce: {
                horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
                vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
              },
              enable: false,
              mode: "bounce",
              overlap: { enable: true, retries: 0 },
            },
            color: {
              value: "#00f7f7",
            },
            move: {
              angle: { offset: 0, value: 90 },
              attract: { distance: 200, enable: false, rotate: { x: 600, y: 1200 } },
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              speed: 1,
            },
            number: {
              density: { enable: true, area: 800, factor: 1000 },
              limit: 0,
              value: 33,
            },
            opacity: {
              random: { enable: true, minimumValue: 0.03 },
              value: { min: 0.01, max: 0.05 },
            },
            rotate: {
              random: { enable: true, minimumValue: 0 },
              value: { min: 0, max: 360 },
              animation: { enable: true, speed: 1, sync: false },
              direction: "random",
            },
            shape: { options: {}, type: "triangle" },
            size: {
              random: { enable: true, minimumValue: 1 },
              value: { min: 0.3, max: 60 },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          themes: [],
          zLayers: 100,
        }
      }
    />
  )
}