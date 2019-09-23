class NotesController < ApplicationController
  def index
    notes = Note.all
    render json: notes, status: :ok
  end

  def create
    note = Note.create!(note_params)
    render json: note, status: :ok
  end

  def note_params
    params.require(:note).permit(
      :text,
    )
  end
end
