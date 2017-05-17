import sys, os, time
from datetime import datetime
from timeit import default_timer as timer
from glob import glob

import logging
logging.basicConfig(format='%(asctime)s %(name)s.%(lineno)d %(levelname)s : %(message)s',
        datefmt="%H:%M:%S",
        level=logging.INFO)
# logger = logging.getLogger(__name__)
logger = logging.getLogger('__main__').getChild(__name__)

def copy_original(main_fname):
    copy_fname = main_fname + '.tmp'
    os.rename(main_fname, copy_fname)
    return copy_fname

def get_inputs(inputs_dirname):
    g = []
    for ext in ['markdown', 'md']:
        g.extend(glob(os.path.join(inputs_dirname, '*.{}'.format(ext))))
    g = [os.path.splitext(fname)[0] for fname in g]
    g.sort()
    return g

def insert_inputs(main_tex_fname, copy_fname, inputs):
    outf = open(main_tex_fname, 'w')
    f = open(copy_fname, 'r')

    ignore_lines = False
    for line in f:
        if line[0] == '%':
            outf.write(line)
            line = line.strip()
            if line == '% BEGIN INPUTS':
                # ADD HERE WHAT WILL GO BETWEEN THE 'BEGIN INPUTS' AND 'END INPUT' LINES
                for input_file in inputs:
                    # double {{ to escape, so result should be '\input{input_file}'
                    s = "\\input{{{}}}".format(input_file)
                    outf.write(s)
                    outf.write('\n')
                    outf.write('\clearpage')
                    outf.write('\n')
                ignore_lines = True
            elif line == '% END INPUTS':
                ignore_lines = False
            continue
        if ignore_lines is False:
            # just write the line as is
            outf.write(line)

    outf.close()
    f.close()

def main(args):
    logger.debug(args.inputs_dirname)
    logger.debug(args.main_tex_fname)
    logger.debug(args.keep_original)
    copy_fname = copy_original(args.main_tex_fname)
    inputs = get_inputs(args.inputs_dirname)
    logger.debug(inputs)
    insert_inputs(args.main_tex_fname, copy_fname, inputs)
    if not args.keep_original:
        os.remove(copy_fname)

if __name__ == "__main__":
    total_start = timer()
    logger = logging.getLogger(__name__)
    logger.info(" ".join(sys.argv))
    logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
    import argparse
    parser = argparse.ArgumentParser(description="From all the markdown (.md, .markdown) files in the specified folder, add '\input{}' commands in the main tex file")
    parser.add_argument("-m", "--main-tex-fname", default='general_exam_jp.tex', help="filename for the main tex file")
    parser.add_argument("-i", "--inputs-dirname", default='inputs', help="directory name for the (markdown) inputs")
    parser.add_argument("-k", "--keep-original", action='store_true', help="keep the original main tex file")
    parser.add_argument("--debug", action='store_true', help="output debugging info")
    global args
    args = parser.parse_args()
    if args.debug:
        logger.setLevel(logging.DEBUG)
        logger.debug('debug mode is on')
    else:
        logger.setLevel(logging.INFO)
    main(args)
    total_end = timer()
    logger.info('all finished. total time: {:.2f} seconds'.format(total_end-total_start))
