import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import MultipleSelect from '../../../../components/Select/MultipleSelect';
import { levelSelect, subjectSelect } from '../../../../helpers/constants';
import { questionValidationSchema } from '../../../../utils/questionValidationSchema';
import OptionsDialog from '../../../../components/Dialogs/OptionsDialog';
import dynamic from 'next/dynamic';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import getSlugifiedStr from '../../../../controllers/clientControllers/getSlugifiedStr';
import useToastHandler from '../../../../hooks/useToastHandler';
import { GET_QUESTIONS } from '.';
const RichTextEditor = dynamic(() => import('../../../../components/RichTextEditor'), { ssr: false });

const initialValues = {
	question: '',
	options: [''],
	correctOption: '',
	description: '',
	levels: [],
	subjects: [],
	keywords: '',
}

const ADD_QUESTION = gql`
	mutation addQuestion(
		$question:String!,
		$options:[String],
		$correctOption:String,
		$keywords:String,
		$slug:String!,
		$description:String,
		$levels:[Int],
		$subjects:[String],
		){
		addQuestion(
			question:$question,
			options:$options,
			correctOption:$correctOption,
			keywords:$keywords,
			slug:$slug,
			description:$description,
			levels:$levels,
			relatedSubjects:$subjects,
			entryBy:"mahadev"
		){
			code
			message
			success
		}
	}
`


function AddQuestion() {
	const [optionsOpen, setOptionsOpen] = React.useState(false);
	const [textEditorValue, setTextEditorValue] = useState('');
	const [slug, setSlug] = useState('');
	const toastId = React.useRef(null);
	const customToast = useToastHandler(toastId);

	const {
		register,
		control,
		formState: { errors },
		setValue,
		handleSubmit,
		reset,
	} = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(questionValidationSchema),
		mode: 'onBlur'
	})

	const [addQuestion] = useMutation(ADD_QUESTION, {
		update(cache, { data: { addQuestion } }) {
			customToast.dataToast(addQuestion);
			if (addQuestion.success) {
				reset();
				setSlug('');
				setTextEditorValue('')
			}
		},
		onError: err => {
			customToast.errorToast(err)
		},
		refetchQueries: [
			{ query: GET_QUESTIONS }, // DocumentNode object parsed with gql
			'getQuestions' // Query name
		],

	})

	const handleOptionsContinue = (options, correctOption) => {
		setOptionsOpen(false);
		setValue('options', Object.keys(options).map(key => options[key]));
		setValue('correctOption', options[correctOption]);
	}

	const handleFormSubmit = (d) => {
		customToast.loadingToast('Please wait saving...');
		addQuestion(
			{ variables: { ...d, description: textEditorValue, slug } }
		)
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Stack spacing={1.5}>
				<TextField
					variant="outlined"
					type="text"
					label="Question"
					autoComplete="off"
					{...register("question")}
					onBlur={e => setSlug(getSlugifiedStr(e.target.value))}
					error={errors.question}
					helperText={errors?.question?.message}
				/>
				<OptionsDialog
					open={optionsOpen}
					onOpen={() => setOptionsOpen(true)}
					onClose={handleOptionsContinue}
					error={errors.correctOption ? true : false}
					helperText={errors.correctOption}
				/>
				<RichTextEditor value={textEditorValue} onChange={setTextEditorValue} />
				<Controller
					name="levels"
					control={control}
					type="text"
					defaultValue={[]}
					render={({ field }) => (
						<MultipleSelect
							label="Select Levels"
							menuItems={levelSelect}
							field={field}
						/>
					)}
				/>
				<Controller
					name="subjects"
					control={control}
					type="text"
					defaultValue={[]}
					render={({ field }) => (
						<MultipleSelect
							label="Select Subjects"
							menuItems={subjectSelect}
							field={field}
						/>
					)}
				/>
				<TextField
					variant="outlined"
					type="text"
					label="Keywords"
					autoComplete="off"
					{...register("keywords")}
					error={errors.keywords}
					helperText={errors?.keywords?.message}
				/>
				<TextField
					variant="outlined"
					type="text"
					label="Slug"
					autoComplete="off"
					value={slug}
					onChange={e => setSlug(e.target.value)}
				// error={errors.slug}
				// helperText={errors?.slug?.message}
				/>
				<Button
					type='submit'
					fullWidth
					variant="contained"
				>Submit</Button>
			</Stack>
		</form>
	)
}

export default AddQuestion



