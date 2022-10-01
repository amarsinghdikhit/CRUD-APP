import express, {Router} from 'express';
import { getUsers } from '../controller/user-controller.js';
import {addUser} from '../controller/user-controller.js';
import { getUser } from '../controller/user-controller.js';
import { editUser, deleteUser } from '../controller/user-controller.js';

const router=express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;