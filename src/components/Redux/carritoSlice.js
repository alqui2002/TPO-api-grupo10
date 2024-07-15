import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
    name: 'carrito',
    initialState: {
        productosSeleccionados: [],
        seleccionEnvio: 'false',
        codigoDescuento: '',
        descuentoAplicado: 0,
        precioConDescuento: 0,
        totalPrice: 0,
        adress: '',
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
        calcularTotal(state) {
            const totalPrice = state.productosSeleccionados.reduce((total, product) => total + product.price, 0);
            const precioConDescuento = totalPrice - (totalPrice * (state.descuentoAplicado / 100));
            state.totalPrice = totalPrice;
            state.precioConDescuento = precioConDescuento;
        },
        setAdress(state, action) {
            state.adress = action.payload;
        },
        aplicarDescuento(state, action) {
            const discount = action.payload;
            state.descuentoAplicado = discount;
            const totalPrice = state.productosSeleccionados.reduce((total, product) => total + product.price, 0);
            const precioConDescuento = totalPrice - (totalPrice * (discount / 100));
            state.totalPrice = totalPrice;
            state.precioConDescuento = precioConDescuento;
        }
    },
});

export const { setProductosSeleccionados, setSeleccionEnvio, setCodigoDescuento, setDescuentoAplicado, calcularTotal, setAdress, aplicarDescuento } = carritoSlice.actions;
export default carritoSlice.reducer;
