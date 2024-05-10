import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  return (
    <div className="relative flex grow flex-col py-6">
      <div className="container relative flex grow flex-col px-4">
        <h1 className="text-center text-3xl font-semibold leading-tight tracking-tight">
          {title}
        </h1>
        <div className="mt-6 text-lg">{children}</div>
      </div>
    </div>
  );
}
