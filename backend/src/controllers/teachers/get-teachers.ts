import { DBTeacher } from '../../models/teacher';
import { AuthController } from '../../util';

export const getTeachers: AuthController = async (req, res, next) => {
	try {
		const teachers = await DBTeacher.find({
			// select: ['id', 'name', 'email'],
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
			},
			order: { lastName: 'asc', firstName: 'asc' },
		});

		return res.status(200).send(teachers);
	} catch (err) {
		return next(err);
	}
};