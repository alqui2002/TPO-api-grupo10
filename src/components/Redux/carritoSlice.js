import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
    name: 'carrito',
    initialState: {
        productosSeleccionados: [],
        seleccionEnvio: 'seleccionarEnvio',
        codigoDescuento: '',
        descuentoAplicado: 0,
        precioConDescuento: 0,
        totalPrice: 0,
        adress:'',
    },
    reducers: {
        setProductosSeleccionados(state, action) {
            state.productosSeleccionados = action.payload;
        },
        setSeleccionEnvio(state, action) {
            state.seleccionEnvio = action.payload;
        },
        setCodigoDescuento(state, action) {
            state.codigoDescuento = action.payload;
        },
        setDescuentoAplicado(state, action) {
            state.descuentoAplicado = action.payload;
        },
        calcularTotal(state, action) {
            state.precioConDescuento = action.payload;
        },
        setAdress(state, action) {
            state.adress = action.payload;
        }
    },
});

export const { setProductosSeleccionados, setSeleccionEnvio, setCodigoDescuento, setDescuentoAplicado, calcularTotal,setAdress } = carritoSlice.actions;
export default carritoSlice.reducer;
