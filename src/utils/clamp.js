import { WINDOW_HEIGHT_VALUE } from '@constants/app';

export const clamp = (value) => 1 - Math.min(Math.max(value / WINDOW_HEIGHT_VALUE, 0), 1);
