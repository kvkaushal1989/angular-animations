import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const jackInTheBox = animation(group([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ 'transform-origin': 'center bottom', transform: 'scale(0.1) rotate(30deg)', easing: 'ease', offset: 0 }),
      style({ 'transform-origin': 'center bottom', transform: 'rotate(-10deg)', easing: 'ease', offset: 0.5 }),
      style({ 'transform-origin': 'center bottom', transform: 'rotate(3deg)', easing: 'ease', offset: 0.7 }),
      style({ 'transform-origin': 'center bottom', transform: 'scale(1)', easing: 'ease', offset: 1 }),
    ])
  ),
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 0, offset: 0 }),
      style({ opacity: 1, offset: 1 }),
    ])
  ),
]));

const DEFAULT_DURATION = 1000;

export function jackInTheBoxAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'jackInTheBox', [
    transition(
      '0 <=> 1',
      [
        useAnimation(jackInTheBox, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}