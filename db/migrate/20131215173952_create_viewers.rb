class CreateViewers < ActiveRecord::Migration
  def change
    create_table :viewers do |t|
      t.string  :name
      t.string  :email
      t.integer :phone_no
      t.string  :description
      t.string  :address
      t.string  :website
      t.string  :company
      t.string  :scope_of_work
      t.float   :budget

      t.timestamps
    end
  end
end
