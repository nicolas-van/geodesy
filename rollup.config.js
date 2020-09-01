
import pkg from './package.json';

export default [
    {
        input:    './geodesy.js',
        external: [],
        output:   [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' },
        ],
    },
];
