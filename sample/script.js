
ClassicEditor
	.create(document.querySelector('.editor'), {
		// Editor configuration.
		tpUpload: {
			serverUrl: 'https://localhost:7235/file',
			authorization: '',
			authorizationType: '',
			fileNamePrefix: ''
		}
	})
	.then(editor => {
		window.editor = editor;

		window.editor.setData(`Bilingual Personality Disorder
		------------------------------

		![](https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg)

		One language, one person.

		This may be the first time you hear about this made-up disorder but it actually isn’t so far from
		the truth. Even the studies that were conducted almost half a century show that **the language you
		speak has more effects on you than you realize**.

		One of the very first experiments conducted on this topic dates back to 1964. [In the
		experiment](https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals)
		designed by linguist Ervin-Tripp who is an authority expert in psycholinguistic and sociolinguistic
		studies, adults who are bilingual in English in French were showed series of pictures and were asked
		to create 3-minute stories. In the end participants emphasized drastically different dynamics for
		stories in English and French.

		Another ground-breaking experiment which included bilingual Japanese women married to American men
		in San Francisco were asked to complete sentences. The goal of the experiment was to investigate
		whether or not human feelings and thoughts are expressed differently in **different language
		mindsets**. Here is a sample from the the experiment:

		English

		Japanese

		Real friends should

		Be very frank

		Help each other

		I will probably become

		A teacher

		A housewife

		When there is a conflict with family

		I do what I want

		It's a time of great unhappiness

		More recent [studies](https://books.google.pl/books?id=1LMhWGHGkRUC) show, the language a person
		speaks affects their cognition, behaviour, emotions and hence **their personality**. This shouldn’t
		come as a surprise [since we already
		know](https://en.wikipedia.org/wiki/Lateralization_of_brain_function) that different regions of the
		brain become more active depending on the person’s activity at hand. Since structure, information
		and especially **the culture** of languages varies substantially and the language a person speaks is
		an essential element of daily life.`);
	})
	.catch(handleSampleError);

function handleSampleError(error) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${issueUrl} with the build id "xzxnac2203k2-unt8fr6ckh47" and the error stack trace:`
	].join('\n');

	console.error(message);
	console.error(error);
}
