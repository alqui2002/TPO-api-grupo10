import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks para manejar acciones asincrónicas
export const fetchVinilos = createAsyncThunk('vinilos/fetchVinilos', async () => {
    try {
        const response = await fetch('http://localhost:8080/api/vinilos'); // Asegúrate de que esta URL es correcta
        if (!response.ok) {
            throw new Error('Error al obtener los vinilos');
        }
        const data = await response.json();
        return(data.content); // Asegúrate de que 'data.content' es el lugar correcto donde están los vinilos
        console.log(data.content[0].image)
        
    } catch (error) {
        console.error(error.message);
    }
});

export const addVinilo = createAsyncThunk('vinilos/addVinilo', async (vinilo) => {
    const { title, subtitle, image, price, genero, stock } = vinilo;
    const response = await fetch('http://localhost:8080/api/vinilos/add-vinilo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ title, subtitle, image, price, genero, stock })
    });

    if (!response.ok) throw new Error('Failed to add vinilo');
    return response.json();
});

export const updateVinilo = createAsyncThunk('vinilos/updateVinilo', async (vinilo) => {
    const { id, image, price, stock } = vinilo;
    const response = await fetch(`http://localhost:8080/api/vinilos/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ image, price, stock })
    });

    if (!response.ok) throw new Error('Failed to update vinilo');
    return response.json();
});

export const deleteVinilo = createAsyncThunk('vinilos/deleteVinilo', async (id) => {
    const response = await fetch(`http://localhost:8080/api/vinilos/delete/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete vinilo');
    return id;
});

const viniloSlice = createSlice({
    name: 'vinilos',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // Reducers adicionales si es necesario
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVinilos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchVinilos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;  // Solo asignar la lista de vinilos
            })
            .addCase(fetchVinilos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addVinilo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateVinilo.fulfilled, (state, action) => {
                const index = state.items.findIndex(vinilo => vinilo.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteVinilo.fulfilled, (state, action) => {
                state.items = state.items.filter(vinilo => vinilo.id !== action.payload);
            });
    },
});

export default viniloSlice.reducer;

//export const selectVinilos = (state) => state.vinilos.items || [];  // Manejar caso en que state.vinilos es undefined
export const selectVinilosStatus = (state) => state.vinilos.status;
export const selectVinilosError = (state) => state.vinilos.error;
