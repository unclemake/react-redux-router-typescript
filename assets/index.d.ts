/// <reference path="../../typings/tsd.d.ts" />
declare var require: {
    async: (string: string, cb: (mod: any) => void) => void
};

//滚动条插件
declare module "react-custom-scrollbars" {
    import * as React from 'react';

    export class Scrollbars extends React.Component<any, any> {

    }
}