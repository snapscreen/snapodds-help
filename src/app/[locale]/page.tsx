import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <div className="mx-auto max-w-md">
        <div className="rounded-xl bg-[--color-background-flash] p-6 shadow-lg">
          <ol className="mx-6 mb-4 list-decimal space-y-2">
            <li>{t.rich('first')}</li>
            <li>{t.rich('second')}</li>
          </ol>
          <Image
            alt="Snap TV"
            className="mt-6 h-auto w-full"
            height={300}
            src="/SnapOdds-illustration.svg"
            width={300}
          />
        </div>
        <section className="my-12">
          <h2 className="my-3 text-center text-2xl font-semibold">
            {t.rich('troubleTitle')}
          </h2>
          <ol className="space-y-4">
            <li className="rounded-xl bg-[--color-background-flash] p-6 shadow-lg">
              <p>
                {t.rich('troubleFirstReason', {
                  strong: (chunks) => (
                    <strong className="font-bold">{chunks}</strong>
                  )
                })}
              </p>
              <Image
                alt=""
                className="mt-3 h-auto w-full rounded-lg"
                height={300}
                src="/snap-help-01.jpg"
                width={300}
              />
            </li>
            <li className="rounded-xl bg-[--color-background-flash] p-6 shadow-lg">
              <p>
                {t.rich('troubleSecondReason', {
                  strong: (chunks) => (
                    <strong className="font-bold">{chunks}</strong>
                  )
                })}
              </p>
              <Image
                alt=""
                className="mt-3 h-auto w-full rounded-lg"
                height={300}
                src="/snap-help-02.jpg"
                width={300}
              />
            </li>
          </ol>
        </section>
        <section className="my-12">
          <h2 className="my-3 text-center text-2xl font-semibold">
            {t.rich('valueProposition')}
          </h2>
          <ol className="mx-6 list-disc space-y-2">
            <li>
              <p>{t.rich('valueFirst')}</p>
            </li>
            <li>
              <p>{t.rich('valueSecond')}</p>
            </li>
          </ol>
        </section>
      </div>
    </PageLayout>
  );
}
