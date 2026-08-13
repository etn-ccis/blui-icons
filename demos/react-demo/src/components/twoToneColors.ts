export type TwoToneStatus = 'error' | 'orange' | 'warning' | 'success' | 'primary' | 'purple' | 'neutral';

type Pair = { isolated: string; container: string };

export const twoToneColors: Record<TwoToneStatus, { light: Pair; dark: Pair }> = {
    error: { light: { isolated: '#CA3C3D', container: '#FFCDC8' }, dark: { isolated: '#FFCDC8', container: '#CA3C3D' } },
    orange: {
        light: { isolated: '#B06400', container: '#FFDCC0' },
        dark: { isolated: '#FFDCC0', container: '#B06400' },
    },
    warning: {
        light: { isolated: '#8D7A00', container: '#FBE365' },
        dark: { isolated: '#FBE365', container: '#8D7A00' },
    },
    success: {
        light: { isolated: '#18860D', container: '#95F77D' },
        dark: { isolated: '#95F77D', container: '#18860D' },
    },
    primary: {
        light: { isolated: '#1C77CC', container: '#B1DAFF' },
        dark: { isolated: '#B1DAFF', container: '#1C77CC' },
    },
    purple: {
        light: { isolated: '#9F45F6', container: '#F0DBFF' },
        dark: { isolated: '#F0DBFF', container: '#9F45F6' },
    },
    neutral: {
        light: { isolated: '#44474E', container: '#C0C1C3' },
        dark: { isolated: '#C0C1C3', container: '#44474E' },
    },
};
