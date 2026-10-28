import './style.css';
import { Game } from './game/Game';

const loading = document.querySelector<HTMLElement>('#loading')!;
const errorOverlay = document.querySelector<HTMLElement>('#error')!;
const errorMessage = document.querySelector<HTMLElement>('#error-message')!;

try {
  const game = new Game(document.querySelector<HTMLCanvasElement>('#game')!);
  await game.init();
  loading.classList.add('hidden');
  game.start();
} catch (error) {
  console.error(error);
  loading.classList.add('hidden');
  errorOverlay.classList.remove('hidden');
  errorMessage.textContent = error instanceof Error ? error.message : 'Unknown startup error.';
}
