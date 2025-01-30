import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<Object3D>, Object3D>;
    }
  }
}